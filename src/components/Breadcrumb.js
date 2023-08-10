import React from 'react';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

const Breadcrumb = ({ crumbs }) => {
  return (
    <div className="breadcrumb-container">
      <Link href="/">
        Home
      </Link>
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
            /
          {/* <FiChevronRight className="breadcrumb-icon" /> */}
          <Link href={crumb.url}>
        {crumb.label}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
