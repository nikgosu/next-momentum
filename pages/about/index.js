import Link from "next/link"
import Router from "next/router"
import {MainLayout} from "../../components/MainLayout"

export default function About() {

	const linkClickHandle = () => {
		Router.push('/')
	}
	return (
		<MainLayout title={'About'}>
			<h1>About page</h1>
			<button
				onClick={linkClickHandle}
			>Go back to home</button>
		</MainLayout>
	)
}