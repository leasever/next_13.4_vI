import { MessagesContext } from "@/context/messages";
import { Message } from "@/lib/validators/message";
import { useMutation } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { useContext } from "react";

const SendMessageMutation = () => {
  const {
    messages,
    addMessage,
    removeMessage,
    updateMessage,
    setIsMessageUpdating,
  } = useContext(MessagesContext);

  const {
    mutate: sendMessage,
    isLoading,
    error,
  } = useMutation({
    mutationKey: ["sendMessage"],

    mutationFn: async (_message: Message) => {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages }),
      });

      if (!response.ok) {
        throw new Error();
      }

      return response.body;
    },
    onMutate: (message) => {
      if (message.text.trim() === "") {
        throw new Error("Empty message");
      }
      addMessage(message);
    },
    onSuccess: async (stream) => {
      if (!stream) throw new Error("No stream found");

      const id = nanoid();
      const responseMessage: Message = {
        id,
        isUserMessage: false,
        text: "",
      };

      addMessage(responseMessage);

      setIsMessageUpdating(true);

      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        updateMessage(id, (prev) => prev + chunkValue);
      }

      setIsMessageUpdating(false);
    },
    onError(_, message) {
      removeMessage(message.id);
    },
  });

  return {
    isLoading,
    sendMessage,
    error,
  };
};

export default SendMessageMutation;
