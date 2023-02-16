import { type Ref, type ComputedRef, reactive, ref, computed } from "vue";

export interface ActionKeyKiosk {
    active: Ref;
}

export interface CommonState {
    loading: boolean;
    visibleNetworkError: boolean;
}

const state = reactive<CommonState>({
    loading: false,
    visibleNetworkError: false,
});

export interface UseCommon {
    hideModalNetworkError: () => void;
    showModalNetworkError: () => void;
    loading: ComputedRef<boolean>;
    setLoading: (loading: boolean) => void;
    visibleNetworkError: ComputedRef<boolean>;
    loadings: ActionKeyKiosk;
    errors: ActionKeyKiosk;
}

const useCommon = (): UseCommon => {
    const loadings = reactive<ActionKeyKiosk>({
        active: ref(false),
    });

    const errors = reactive<ActionKeyKiosk>({
        active: ref(false),
    });

    const hideModalNetworkError = () => {
        state.visibleNetworkError = false;
    };

    const showModalNetworkError = () => {
        state.visibleNetworkError = true;
    };

    const setLoading = (loading: boolean) => {
        state.loading = loading;
    };

    return {
        setLoading,
        hideModalNetworkError,
        showModalNetworkError,
        loading: computed(() => state.loading),
        visibleNetworkError: computed(() => state.visibleNetworkError),

        loadings,
        errors,
    };
};

export default useCommon;
