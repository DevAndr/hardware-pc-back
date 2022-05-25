import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import axios from "axios";

export default function Home() {
	const [data, setData] = useState([])

	useEffect(() => {
		fetchData();
	}, [])

	async function fetchData() {
		const res = await axios('/api/test');
		setData(res.data)
		console.log(res.data)
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>Hello</div>

			<div className={styles.inputArea}>
				{
					JSON.stringify(data)
				}
			</div>
		</div>
	)
}
