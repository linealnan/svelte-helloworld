import { writable } from 'svelte/store';

const user = 'kukreti.ashutosh@gmail.com'
const pass = '123456'

export const store = writable(null);

let sessions = []

export const getUserDetails = async ( username: string, password: string ) => {
	if ( username === user && password === pass )
		return 1
}
