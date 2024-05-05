import { AppDispatch, RootStateInterface } from "@/app/providers/store-provider";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateInterface> = useSelector;
