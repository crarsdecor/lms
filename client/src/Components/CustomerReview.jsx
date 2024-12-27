import React from "react";
import { Card } from "antd";
import { Button } from "antd";

const CustomerReview = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-6 mt-16 text-blue-500">
        What Our Customer Says
      </h1>
      <div className="container mx-auto p-4">
        {/* First Section: Split into two halves */}
        <div className="lg:flex items-center space-x-8">
          {/* Left Half (Image) */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="https://aumejtoqen.cloudimg.io/v7/tagembed.com/blog/wp-content/uploads/2022/03/customer-reviews-examples.jpg"
              alt="Placeholder Image"
              className="w-full h-[50vh] sm:h-[40vh] md:h-[50vh] lg:h-[50vh] xl:h-[50vh] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Half (Content) */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Customer Review</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              excepturi commodi nam velit minima nesciunt, laboriosam nihil
              voluptates consectetur fuga porro recusandae itaque tempore sed
              praesentium alias, nostrum blanditiis cupiditate adipisci libero
              hic sint earum saepe! Reprehenderit ab commodi officiis explicabo
              tempore, eos at rem distinctio libero ullam est, optio quibusdam
              laborum quas soluta eum provident culpa maxime odio dignissimos,
              repellat quae! Perspiciatis natus quas cumque nihil ipsum rem amet
              nulla adipisci molestias labore! Maiores perspiciatis eius aperiam
              pariatur officia, unde, amet iure et quas beatae esse ut. Ipsam
              esse hic quo aliquid consequuntur numquam voluptates nam modi ex
              dicta.
            </p>
          </div>
        </div>

        {/* Second Section: Videos */}
        <div className="p-4">
          {/* Video Container */}
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {/* Video 1 */}
            <div className="flex-none w-64">
              <iframe
                sandbox="allow-same-origin allow-scripts"
                src="https://drive.google.com/file/d/1k3qshqy7FE0Rrm1KRN39BSkqYgCmgTx9/preview"
                frameBorder="0"
                allowFullScreen
                width="100%"
                height="200"
                allow="autoplay; encrypted-media"
              />
              {/* <iframe
            width="100%"
            sandbox="allow-same-origin allow-scripts"
            height="200"
            src="https://drive.google.com/file/d/1k3qshqy7FE0Rrm1KRN39BSkqYgCmgTx9/preview"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe> */}
            </div>

            {/* Video 2 */}
            <div className="flex-none w-64">
              <iframe
                sandbox="allow-same-origin allow-scripts"
                src="https://drive.google.com/file/d/1k3qshqy7FE0Rrm1KRN39BSkqYgCmgTx9/preview"
                frameBorder="0"
                allowFullScreen
                width="100%"
                height="200"
                allow="autoplay; encrypted-media"
              />
            </div>

            {/* Video 3 */}
            <div className="flex-none w-64">
              <iframe
                sandbox="allow-same-origin allow-scripts"
                src="https://drive.google.com/file/d/1k3qshqy7FE0Rrm1KRN39BSkqYgCmgTx9/preview"
                frameBorder="0"
                allowFullScreen
                width="100%"
                height="200"
                allow="autoplay; encrypted-media"
              />
            </div>

            {/* Video 4 */}
            <div className="flex-none w-64">
              <iframe
                sandbox="allow-same-origin allow-scripts"
                src="https://drive.google.com/file/d/1k3qshqy7FE0Rrm1KRN39BSkqYgCmgTx9/preview"
                frameBorder="0"
                allowFullScreen
                width="100%"
                height="200"
                allow="autoplay; encrypted-media"
              />
            </div>

            {/* Video 5 */}
            <div className="flex-none w-64">
              <iframe
                sandbox="allow-same-origin allow-scripts"
                src="https://drive.google.com/file/d/1k3qshqy7FE0Rrm1KRN39BSkqYgCmgTx9/preview"
                frameBorder="0"
                allowFullScreen
                width="100%"
                height="200"
                allow="autoplay; encrypted-media"
              />
            </div>
          </div>

          {/* Join Now Button */}
          <div className="text-center mt-6">
            <h1 className="text-2xl font-bold text-center mb-6 text-blue-500">
              ALL ELEMENTS ARE REQUIRED FOR GROWTH
            </h1>
            <Button type="primary" size="large">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
