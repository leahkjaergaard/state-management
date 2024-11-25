"use client";
import Image from "next/image";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function Home() {
  // arrays for sizes and colors
  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["White", "Black", "Grey", "Yellow", "Blue"];
  const searchParams = useSearchParams();

  console.log(searchParams);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <main className="flex-1">
      <section className="mx-auto grid max-w-7xl p-8">
        <form className="grid gap-2 sm:grid-cols-2 lg:grid-cols-8">
          <div className="md:col-span-1 lg:col-span-5">
            <div className="aspect-square overflow-hidden bg-neutral-50">
              <Image alt="T-shirt" width={500} height={500} className="h-full w-full object-contain object-center" src="/tshirt.png" priority />
            </div>
          </div>
          <div className="flex flex-col pt-6 sm:col-span-1 sm:px-6 sm:pt-0 lg:col-span-3 lg:pt-16">
            <div>
              <h1 className="mb-4 flex-auto text-3xl font-medium tracking-tight text-neutral-900">T-shirt</h1>
              <p className="mb-8 text-sm">kr. 90.00</p>
              <fieldset className="my-4">
                <legend className="sr-only">Sizes</legend>
                <div className="flex flex-wrap gap-3">
                  {sizes.map((size, index) => {
                    return (
                      <Link key={index} className={`${searchParams.get("size") == size && "bg-blue-200 "} border-neutral-800 text-neutral-900 hover:bg-blue-200 relative flex min-w-[5ch] items-center justify-center rounded border p-4 text-center text-sm font-semibold`} href={`?${createQueryString("size", size)}`}>
                        {size}
                      </Link>
                    );
                  })}
                </div>
              </fieldset>
              <fieldset className="my-4">
                <legend className="sr-only">Colors</legend>
                <div className="flex flex-wrap gap-3">
                  {colors.map((color, index) => {
                    return (
                      <Link key={index} className={`${searchParams.get("color") == color && "bg-blue-200 "}border-neutral-800 text-neutral-900 hover:bg-blue-200 relative flex min-w-[5ch] items-center justify-center rounded border p-4 text-center text-sm font-semibold`} href={`?${createQueryString("color", color)}`}>
                        {color}
                      </Link>
                    );
                  })}
                </div>
              </fieldset>
              <div className="mt-8">
                <Link href={`/payment?${searchParams}`}>
                  <button type="submit" className="h-12 items-center rounded-md bg-blue-700 px-6 py-3 text-base font-medium leading-6 text-white shadow hover:bg-neutral-800">
                    <span>Add to cart</span>
                  </button>
                </Link>
              </div>
              <div className="mt-8 space-y-6 text-sm text-neutral-500">
                <div>
                  <p>
                    <b>Box fit t-shirt med logo i mocha med korte ærmer, rund hals og ‘drop shoulders’ i kraftig og blød bomuld med oversize pasform.</b>&nbsp;T-shirten har et oversized fit. Størrelserne er dog ‘normale’ i den forstand, at hvis du normalt bruger str. L, så skal du også vælge L her.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
