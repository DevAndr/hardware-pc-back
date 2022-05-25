import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
	const [data, setData] = useState([])

	async function submitWebsiteURL() {
		const res = await fetch('/api/test', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => res.json())

		setData(res.data)
		console.log(res)
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.inputArea}>
				{
					data.toString()
				}
			</div>
		</div>
	)
}
