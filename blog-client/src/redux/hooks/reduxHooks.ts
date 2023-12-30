import { AppDispatch, RootState } from '@/redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// redux 훅을 typescript에서 사용하기 위해 훅의 타입을 정의해줘야 한다.
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
