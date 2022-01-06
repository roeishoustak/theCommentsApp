import React from 'react'
import { Container ,Title ,WavingHand } from './App.styles'
import CommentsData from './Comments'
import PostComment from './components/PostComment'

const App = () => {
    return (
        <div>
            <Container>
                <Title>
                    Welcome to the comments place <WavingHand>&#128075;</WavingHand>
                </Title>
                <PostComment/>
                <CommentsData />
            </Container>  
        </div>
    )
}

export default App