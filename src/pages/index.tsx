import tw from 'twin.macro'

import { trpc } from '../utils/trpc'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gray-300`,
  ],
}

const App = () => {
  const hello = trpc.hello.useQuery({ text: 'user' })
  // get the first post
  const post = trpc.post.findFirstPost.useQuery({
    where: { id: '5c03994c-fc16-47e0-bd02-d218a370a078' },
  })

  return (
    <div css={styles.container({ hasBackground: true })}>
      <div>
        <p>{hello?.data?.greeting}</p>
      </div>
      <div>
        <p>{post?.data?.text}</p>
      </div>
    </div>
  )
}

export default App
