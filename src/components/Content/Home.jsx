import Post from "./Post"

const Home = () => {
    return (
        <Post name='Brendan' timestamp='06/02/2022' text={
            <div className='home-wrap'>
                <h1 className='home-header'>
                    Welcome to my Discord Dashboard!
                </h1>
                <h2 className='home-body'>
                    Potential new features: <br />
                    - adding add server functionality <br />
                    - adding reactions <br />
                    - posts???
                </h2>
                <h3>
                    Not here from Github? <br />
                    Visit the repo from the sidebar!
                </h3>
            </div>
        }/>
    )
}

export default Home