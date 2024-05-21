import React, { memo, useEffect, useState } from "react";
import ReviewView from "./review.view";

const ReviewContainer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomerData();
  }, []);

  const fetchCustomerData = async () => {
    await fetch("https://664d03f7ede9a2b5565268e0.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const props = {
    customers,
  };

  return <ReviewView {...props} />;
};

export default memo(ReviewContainer);
