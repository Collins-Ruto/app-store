// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Console } from "console";
import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_APPLATE_BLOG_ENDPOINT;

export default async function newApp(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });
  const query = gql`
    mutation CreateApp(
      $title: String!
      $version: String
      $created: String
      $category: String
      $market_url: String!
      $downloads: String
      $short_desc: String
      $description: String
      $descriptions: RichTextAST
      $website: String
      $icon: String
      $content_rating: String
      $similar: [String!]
      $package_name: String!
      $rating: Float
      $size: Int!
      $cat_slug: String!
      $min_sdk: String
    ) {
      createApp(
        data: {
          title: $title
          version: $version
          created: $created
          category: $category
          market_url: $market_url
          downloads: $downloads
          short_desc: $short_desc
          description: $description
          descriptions: $descriptions
          website: $website
          icon: $icon
          content_rating: $content_rating
          similar: $similar
          slug: $package_name
          rating: $rating
          size: $size
          min_sdk: $min_sdk
          categories: { connect: { slug: $cat_slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, req.body);
    setTimeout(() => {}, 400);
    return res.status(200).send(result);
    
  } catch (error) {
    setTimeout(() => {}, 400);
    console.log(error);
    return res.status(500).send(error);
  }
}
