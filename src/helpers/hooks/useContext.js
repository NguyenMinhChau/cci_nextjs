import { useContext } from 'react';
import { PageContext } from '../../app/';

export default function UsePageContext() {
	const { state, dispatch } = useContext(PageContext);
	return { state, dispatch };
}
