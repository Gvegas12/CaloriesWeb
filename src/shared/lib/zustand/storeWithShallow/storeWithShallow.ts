import { StoreApi } from "zustand";
import { shallow } from "zustand/shallow";
import { UseBoundStoreWithEqualityFn } from "zustand/traditional";

/**
 * Исключает необходимость каждый раз использовать middleware "shallow" при импорте состояний в react-компонент.
 *
 * @param store Принимает ссылку на стор созданный при помощи create из пакета zustand
 * @returns Возвращает тот же стор, но уже раcширенный с функционалом middleware shallow, который можно использовать как useSelector в Redux.
 *
 * @abstract --
 * import { create } from "zustand";
 *
 * const store = create( ... );
 *
 * export const useMyStore = useShallowZustand(store);
 */
export const storeWithShallow = <T>(
	store: UseBoundStoreWithEqualityFn<StoreApi<T>>,
) => {
	const storeWithShallowWrapper: () => T = () =>
		store((state) => state as T, shallow);

	return storeWithShallowWrapper;
};
