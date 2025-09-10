import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./store/slices/counterSlice";

export default function App() {
    const { value } = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>reset</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+10</button>
        </div>
    );
}
