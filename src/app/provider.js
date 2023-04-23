import { useReducer } from 'react';
import PageContext from './createContext';
import reducer, { initialState } from './reducer';

export default function ProviderContext({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<PageContext.Provider value={{ state, dispatch }}>
			{children}
		</PageContext.Provider>
	);
}
