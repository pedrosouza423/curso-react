import { createContext, useReducer, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface CreateCycleData {
    task: string;
    minutesAmount: number;
}

interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    fineshedDate?: Date;
}


interface CycleContextType {
    cycles: Cycle[];
    activeCycle: Cycle | undefined;
    activeCycleId: string | null;
    amountSecondsPassed: number;
    markCurrentCycleAsFineshed: () => void;
    setSecondsPassed: (seconds: number) => void;
    createNewCycle: (data: CreateCycleData) => void;
    interruptCurrentCycle: () => void;
}

interface CyclesContextProviderProps {
    children: React.ReactNode;
}

interface CylcleState {
    cycles: Cycle[];
    activeCyclesId: string | null;
}

export const CycleContext = createContext({} as CycleContextType)

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
    const [cycles, dispatch] = useReducer((state: CylcleState, action: any) => {
        if (action.type === 'ADD_NEW_CYCLE') {
            return [...state, action.payload.newCycle]
        }

        return state
    }, [])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const activeCycle = cycles.find(c => c.id === activeCycleId)


    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds)
    }

    function markCurrentCycleAsFineshed() {

        dispatch({
            type: 'MARK_CURRENT_CYCLE_AS_FINESHED',
            payload: {
                activeCycleId
            }
        })

        // setCycles((state) => state.map(cycle => {
        //     if (cycle.id === activeCycleId) {
        //         return {
        //             ...cycle,
        //             fineshedDate: new Date(),
        //         }
        //     }

        //     return cycle;
        // }))
    }

    const createNewCycle = (data: CreateCycleData) => {
        const newCycle: Cycle = {
            id: uuidv4(),
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }

        dispatch({
            type: 'ADD_NEW_CYCLE',
            payload: {
                newCycle
            }
        })
        // setCycles((state) => [...state, newCycle])
        setActiveCycleId(newCycle.id)
        setAmountSecondsPassed(0)

    }

    const interruptCurrentCycle = () => {

        dispatch({
            type: 'INTERRUPT_CURRENT_CYCLE',
            payload: {
                activeCycleId
            }
        })

        // setCycles((state) => state.map(cycle => {
        //     if (cycle.id === activeCycleId) {
        //         return {
        //             ...cycle,
        //             interruptedDate: new Date(),
        //         }
        //     }

        //     return cycle;
        // }))

        setActiveCycleId(null)
    }

    return (
        <CycleContext.Provider
            value={{
                cycles,
                activeCycle,
                activeCycleId,
                markCurrentCycleAsFineshed,
                amountSecondsPassed,
                setSecondsPassed,
                createNewCycle,
                interruptCurrentCycle,
            }}>
            {children}
        </CycleContext.Provider>
    )
}