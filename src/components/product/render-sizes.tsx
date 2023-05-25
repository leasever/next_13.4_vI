import { AttributesProduct } from "@/models";

interface Props {
  attributes: AttributesProduct;
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
  showError: boolean;
}

export const renderSizes = ({
  attributes,
  selectedSize,
  setSelectedSize,
  setShowError,
  showError,
}: Props) => {
  const sizeGridItems = attributes.size?.data.map((item, i) => (
    <div
      key={i}
      className={`border rounded-md text-center py-3 font-medium ${
        item.enabled
          ? "hover:border-black cursor-pointer"
          : " cursor-not-allowed bg-black/[0.1] opacity-50"
      } ${selectedSize === item.size ? "border-black" : ""}`}
      onClick={() => {
        setSelectedSize(item.size);
        setShowError(false);
      }}
    >
      {item.size}
    </div>
  ));

  return (
    <>
      <div className="flex justify-between mb-2">
        <div className="text-md font-semibold">Selecciona el tamaño</div>
        <div className="text-md font-medium text-black/[0.5] cursor-pointer">
          Seleccionar guía
        </div>
      </div>

      <div id="sizesGrid" className="grid grid-cols-3 gap-2">
        {sizeGridItems}
      </div>

      {showError && (
        <div className="text-red-600 mt-1">Se requiere selección de tamaño</div>
      )}
    </>
  );
};
