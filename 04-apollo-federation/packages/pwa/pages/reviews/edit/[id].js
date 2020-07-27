// Vendor libs
import React from 'react';
import { useRouter } from 'next/router';

// Component definition
const ReviewDetail = () => {
  // Get route params
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Review detail page</h1>
    </div>
  );
};

// Exportation
export default ReviewDetail;
