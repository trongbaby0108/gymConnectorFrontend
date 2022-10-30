import React from 'react'

const Review = () => {
    return (
        <section className='section space-y-2.5'>
            <div className='container mx-auto'>
                <figure className="mx-auto max-w-screen-md text-center">
                    <svg aria-hidden="true" className="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path></svg>
                    <blockquote>
                        <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                            "Thật tuyệt vời khi được ở đây và thay đổi vóc dáng theo từng ngày."
                        </p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center mt-6 space-x-3">
                        <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile" />
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <cite className="pr-3 font-medium text-gray-900 dark:text-white">Anh Nguyễn Thanh H</cite>
                            <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Thành viên mới</cite>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}

export default Review