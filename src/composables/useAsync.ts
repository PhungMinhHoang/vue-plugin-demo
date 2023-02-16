import { type OnReject, useAsync, type UseAsyncHandle } from "@/composition";
import { isDevelopment } from "@/utils";

const onReject: OnReject = async (context, error) => {
    if (isDevelopment()) {
        console.log("Async error: ", error);
    }

    if (error && error.name === "AxiosError") {
        // do something process errors
    }
};

function useAsyncComposable<T>(fn: UseAsyncHandle<T>) {
    return useAsync(fn, { onReject });
}

export default useAsyncComposable;
