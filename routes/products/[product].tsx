/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, PageProps } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { tw } from "twind";
import { graphql } from "@/utils/shopify.ts";
import { NavBar } from "@/components/NavBar.tsx";
import AddToCart from "@/islands/AddToCart.tsx";

const q = `query ($product: String!) {
  product(handle: $product) {
    title
    description
    # TODO: use 'descriptionHtml' instead of 'description'

    variants(first: 10) {
      edges {
        node {
          id
        }
      }
    }

    featuredImage {
      url
      width
      height
      altText
    }
  }
}`;

export const handler: Handlers = {
  async GET(req, ctx) {
    const data = await graphql(q, { product: ctx.params.product });
    return ctx.render(data);
  },
};

export default function Home({ data }: PageProps) {
  console.log("data", data.product.variants);
  return (
    <>
      <NavBar />
      <div class={tw`px-4 sm:px-8 py-6`}>
        <h2 class={tw`text-2xl font-semibold`}>{data.product.title}</h2>
        <p>{data.product.description}</p>
        {data.product.featuredImage && (
          <img
            src={data.product.featuredImage.url}
            alt={data.product.featuredImage.altText}
            width={data.product.featuredImage.width}
            height={data.product.featuredImage.height}
            class={tw`mt-4 w-32`}
          />
        )}
        <AddToCart id={data.product.variants.edges[0].node.id} />
      </div>
    </>
  );
}