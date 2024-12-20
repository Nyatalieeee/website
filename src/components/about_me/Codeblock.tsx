import NatalieTs from './NatalieTs';

export default function Codeblock() {
    return (
        <>
            <div
                className='block bg-mantle py-2 px-3 m-auto rounded-md md:w-4/5 w-11/12'
                id='aboutMeCodeblock'
            >
                <div className='border-b-2 border-surface1 mb-2 text-subtext0 italic text-sm px-1'>
                    natalie.ts
                </div>
                <div className='font-medium md:text-sm text-xs px-2'>
                    <NatalieTs />
                </div>
            </div>
        </>
    );
}
