import React from 'react'
import { AppCard } from '../../components';
import { request, gql } from "graphql-request";

const SearchPage = ({ data, search }) => {
  return (
    <div className="max-w-[97%] mx-auto">
      <h1 className="font-medium md:font-semibold text-xl md:text-3xl px-4"> Search results for: "<span className='italic font-light'>{search}</span>"</h1>
      <p className='text-xs'>NOTE: similar apps will be included</p>
      <div className="overflow-hidden">
        <div className="block my-4 mx-auto p-0">
          <div className="flex h-full gap-2 flex-wrap pl-2 justify-center relative w-full mb-2 items-center ">
            {data.map((app, index) => (
              <AppCard key={index} app={app.node} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage

export async function getServerSideProps({params}) {
  // Fetch data from external API
  const search = params.search
  const query = gql`
    query MyQuery($search: String) {
      appsConnection(where: { _search: $search }) {
        edges {
          node {
            icon
            rating
            size
            slug
            title
          }
        }
      }
    }
  `;

  const result = await request(
    process.env.NEXT_PUBLIC_APPLATE_BLOG_ENDPOINT,
    query,
    { search }
  );

  const data = result.appsConnection.edges;

  // Pass data to the page via props
  return { props: { data: data, search: search } };
}