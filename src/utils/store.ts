import { ActionTypes, CartType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const INITIAL_STATE = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist<CartType & ActionTypes>(
    (set, get) => ({
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,

      addToCart(item) {
        const products = get().products;
        const productInState = products.find(
          (product) => product.id === item.id
        );

        if (productInState) {
          const updatedProducts = products.map((product) =>
            product.id === productInState.id
              ? {
                  ...product,
                  quantity: product.quantity + item.quantity,
                }
              : product
          );

          const newTotalItems = updatedProducts.reduce(
            (acc, product) => acc + product.quantity,
            0
          );

          const newTotalPrice = updatedProducts.reduce(
            (acc, product) => acc + product.price * product.quantity,
            0
          );

          set({
            products: updatedProducts,
            totalItems: newTotalItems,
            totalPrice: newTotalPrice,
          });
        } else {
          const updatedProducts = [...products, item];

          const newTotalItems = updatedProducts.reduce(
            (acc, product) => acc + product.quantity,
            0
          );

          const newTotalPrice = updatedProducts.reduce(
            (acc, product) => acc + product.price * product.quantity,
            0
          );

          set({
            products: updatedProducts,
            totalItems: newTotalItems,
            totalPrice: newTotalPrice,
          });
        }
      },

      removeFromCart(item) {
        const updatedProducts = get().products.filter(
          (product) => product.id !== item.id
        );

        const newTotalItems = updatedProducts.reduce(
          (acc, product) => acc + product.quantity,
          0
        );

        const newTotalPrice = updatedProducts.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        );

        set({
          products: updatedProducts,
          totalItems: newTotalItems,
          totalPrice: newTotalPrice,
        });
      },
    }),
    { name: "cart", skipHydration: true }
  )
);
