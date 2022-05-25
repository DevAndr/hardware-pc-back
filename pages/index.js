import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import axios from "axios";

export async function getServerSideProps({ req }) {
	// WARNING: This is a generally unsafe application unless you're deploying to a managed platform like Vercel.
	// Be sure your load balancer is configured to not allow spoofed host headers.
	return { props: { host: `${getProtocol(req)}://${req.headers.host}` } }
}

function getProtocol(req) {
	if (req.connection.encrypted) {
		return 'https'
	}
	const forwardedProto = req.headers['x-forwarded-proto']
	if (forwardedProto) {
		return forwardedProto.split(/\s*,\s*/)[0]
	}
	return 'http'
}

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
