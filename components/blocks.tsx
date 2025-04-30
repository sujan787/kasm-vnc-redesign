
import dynamic from 'next/dynamic';

async function Blocks({ content_blocks }: { content_blocks: any }) {

    return <>
        {content_blocks.map((block: any, i: any) => {
            const newDataBinding = `#content_blocks.${i}`
            const TargetComponent = dynamic(() => import(`@/app/${block._page_name}`) as any, {
                loading: () => <p>Loading Blocks...</p>,
            }) as any;

            return <TargetComponent block={block} dataBinding={newDataBinding} key={i} />
        })}
    </>
}

export default Blocks;