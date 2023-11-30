import React from "react";
import SearchBox from "../searchBox/searchBox";
import styles from "./invoices.module.scss";
import TableDataSceleton from "./loading";
import { Suspense } from "react";
import TableData from "./tableData";
import Image from "next/image";

const Page = async ({ params, searchParams }) => {
  const query = searchParams?.query || '';
console.log('query1',query);

  return (
    <div>
      <SearchBox />
      <h2>Invoices ----</h2>
      <div className={styles.invoicesTable}>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <Suspense key={query} fallback={<TableDataSceleton />}>
            <TableData query={ query} />
          </Suspense>
        </table>
      </div>
      <div>
        <Image src="https://via.placeholder.com/600/92c952" height={ 200} width={ 200} alt="test" />
      </div>
    </div>
  );
};

export default Page;
