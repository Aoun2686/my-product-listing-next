import { React } from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="justify-center items-stretch shadow-md bg-white flex max-w-[828px] flex-col p-9 rounded-3xl max-md:px-5">
      <div className="max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch flex grow flex-col max-md:mt-9">
              <div className="justify-center items-stretch bg-gray-50 flex flex-col px-8 py-7 rounded-3xl max-md:px-5">
                <img
                  src={product.image}
                  width={100}
                  height={100}
                  alt="product"
                  className="aspect-[1.08] object-contain object-center w-full overflow-hidden"
                />
              </div>
              <div className="text-gray-400 text-xs leading-4 whitespace-nowrap mt-1">
                Roll over image to zoom in
              </div>
              <div className="justify-center items-stretch flex gap-5 mt-10 max-md:mt-10">
                <Image
                  src={product.image}
                  width={100}
                  height={100}
                  alt="product"
                  className="aspect-[1.07] object-contain object-center w-[76px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                />
                <Image
                  src={product.image}
                  width={100}
                  height={100}
                  alt="product"
                  className="aspect-[1.07] object-contain object-center w-[76px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                />
                <Image
                  src={product.image}
                  width={100}
                  height={100}
                  alt="product"
                  className="aspect-[1.07] object-contain object-center w-[76px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                />
                <Image
                  src={product.image}
                  width={100}
                  height={100}
                  alt="product"
                  className="aspect-[1.07] object-contain object-center w-[76px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-9">
              <div className="justify-between items-stretch flex gap-5">
                <div className="text-green-700 bg-green-100 text-center text-xs font-semibold whitespace-nowrap justify-center items-stretch rounded bg-gray-100 px-3 py-1.5">
                  10% Newyear Offer
                </div>
                <div className="justify-center items-center rounded border flex aspect-[3.0416666666666665] flex-col px-3 py-0.5 border-solid border-gray-100">
                  <Image
                    src="/assets/luminous.png"
                    width={100}
                    height={100}
                    alt="luminous"
                    className="aspect-[2.45] object-contain object-center w-[49px] overflow-hidden"
                  />
                </div>
              </div>
              <div className="justify-between flex gap-5 mt-5 items-start">
                <div className="text-slate-900 py-5 text-2xl font-semibold leading-7 grow shrink basis-auto">
                  {product.name}
                </div>
                <div className="justify-center items-center bg-gray-50 self-stretch flex aspect-square flex-col w-[60px] h-[60px] px-5 rounded-lg">
                  <Image
                    src="/assets/favourite.png"
                    width={100}
                    height={100}
                    alt="favourtie"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>
              </div>
              <div className="items-stretch flex justify-between gap-2 mt-5">
                <div className="text-indigo-400 text-center text-xs font-medium justify-center items-stretch rounded bg-violet-100 grow px-3 py-1">
                  Selling out fast
                </div>
                <div className="text-yellow-600 text-center text-xs font-medium justify-center items-stretch rounded bg-amber-200 bg-opacity-20 grow px-3 py-1">
                  Best in UAE
                </div>
              </div>
              <div className="justify-between items-stretch flex gap-3 mt-4">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-gray-400 text-xs font-medium leading-4 whitespace-nowrap">
                    Capacity
                  </div>
                  <div className="text-gray-400 text-base font-semibold leading-6 tracking-tighter whitespace-nowrap">
                    35 AH
                  </div>
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-gray-400 text-xs font-medium leading-4 whitespace-nowrap">
                    Warranty
                  </div>
                  <div className="text-gray-400 text-base font-semibold leading-6 tracking-tighter whitespace-nowrap">
                    3 yrs
                  </div>
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-gray-400 text-xs font-medium leading-4 whitespace-nowrap">
                    Price
                  </div>
                  <div className="text-gray-400 text-base font-semibold leading-6 tracking-tighter whitespace-nowrap">
                    Wholesale only
                  </div>
                </div>
              </div>
              <div className="bg-zinc-100 shrink-0 h-px mt-4" />
              <div className="justify-between items-stretch flex gap-5 mt-4">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-gray-400 text-xs font-medium leading-4 whitespace-nowrap">
                    Price Inclusive of VAT
                  </div>
                  <div className="text-slate-900 text-2xl font-bold leading-9 whitespace-nowrap mt-2">
                    {product.price}
                  </div>
                </div>
                <div className="justify-center items-center bg-gray-50 flex aspect-square flex-col w-[60px] h-[60px] px-5 rounded-lg">
                  <Image
                    src="/assets/addToCart.png"
                    width={100}
                    height={100}
                    alt="addToCart"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>
              </div>
              <div className="text-gray-400 text-xs leading-4 whitespace-nowrap mt-5">
                Also available on
              </div>
              <div className="justify-between items-stretch flex gap-3.5 mt-2">
                <div className="justify-center items-stretch rounded bg-gray-50 flex grow basis-[0%] flex-col px-5 py-2">
                  <div className="justify-center items-center bg-neutral-100 flex aspect-[1.8333333333333333] flex-col px-3 py-0.5">
                    <Image
                      src="/assets/noon.png"
                      width={100}
                      height={100}
                      alt="noon"
                      className="aspect-square object-contain object-center w-5 overflow-hidden"
                    />
                  </div>
                </div>
                <div className="justify-center items-stretch rounded bg-gray-50 flex grow basis-[0%] flex-col px-5 py-2">
                  <div className="justify-center items-center bg-neutral-100 flex aspect-[1.8333333333333333] flex-col px-3 py-0.5">
                    <Image
                      src="/assets/amazon.png"
                      width={100}
                      height={100}
                      alt="amazon"
                      className="aspect-square object-contain object-center w-5 overflow-hidden"
                    />
                  </div>
                </div>
                <div className="justify-center items-stretch rounded bg-gray-50 flex grow basis-[0%] flex-col px-5 py-2">
                  <div className="justify-center items-center bg-neutral-100 flex aspect-[1.8333333333333333] flex-col px-3 py-0.5">
                    <Image
                      src="/assets/company3.png"
                      width={100}
                      height={100}
                      alt="company3"
                      className="aspect-square object-contain object-center w-5 overflow-hidden"
                    />
                  </div>
                </div>
                <div className="justify-center items-stretch rounded bg-gray-50 flex grow basis-[0%] flex-col px-4 py-2">
                  <div className="justify-center items-center bg-neutral-100 flex aspect-[2] flex-col px-3">
                    <Image
                      src="/assets/whatsapp.png"
                      width={100}
                      height={100}
                      alt="whatsapp"
                      className="aspect-square object-contain object-center w-6 overflow-hidden"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-zinc-100 shrink-0 h-px mt-5" />
              <Link href={`/products/${product.id}`}>
                <div className="text-white text-center text-lg font-semibold leading-6 whitespace-nowrap justify-center items-center border border-[color:var(--Foundation-Red-red-500,#C62A1C)] shadow-sm bg-red-700 mt-5 px-16 py-3.5 rounded-xl border-solid max-md:px-5">
                  Buy now
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
