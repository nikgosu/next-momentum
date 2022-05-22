import PostForm from "./PostForm"

const MyDialog = ({isCreate, visible, setVisible}) => {

	const toggleModal = () => {
		setVisible(false)
	}

	return (
		<div
			style={{
				top: '0',
				bottom: '0',
				right: '0',
				left: '0',
				background: 'rgba(0,0,0, 0.5)',
				position: 'fixed',
				display: visible ? 'flex' : 'none'
			}}
			onClick={toggleModal}
			>
			<div
				style={{
					margin: 'auto',
					background: 'white',
					borderRadius: '12px',
					minHeight: '50px',
					minWidth: '300px',
					padding: '20px'
				}}
				onClick={(e) => e.stopPropagation()}
			>
				<PostForm title={isCreate ? 'Create post' : 'Update post'} currentPost={{title: '12', body: '333'}} toggleModal={toggleModal}/>
			</div>
		</div>
	)
}

export default MyDialog