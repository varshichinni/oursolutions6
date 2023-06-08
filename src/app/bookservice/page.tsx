"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useAppDispatch } from "../../../hooks";
import {
  listServices,
  viewserviceprovider,
  loadReviews,
  loadRequest,
  cancelRequest,
  retrieveRequests,
  respondToRequest,
} from "../../store/bookingserviceprovider.slice";

const BookingPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const services = useSelector(
    (state: RootState) => state.bookingServiceProvider.searchResults
  );
  const isLoading = useSelector(
    (state: RootState) => state.bookingServiceProvider.isLoading
  );
  const error = useSelector(
    (state: RootState) => state.bookingServiceProvider.error
  );

  useEffect(() => {
  dispatch(viewserviceprovider({ id: "8faf114c-a77c-4652-8ecd-5d495464b543" }));
     dispatch(listServices({ serviceType: "labore" }));
     dispatch(loadReviews({ id: "8faf114c-a77c-4652-8ecd-5d495464b543" }));
    dispatch(loadReviews({ id: "8faf114c-a77c-4652-8ecd-5d495464b543" }));
    dispatch(
      loadRequest({
        reasons_for_rejecting: "gdhtssgxgduy",
        serviceprovider_id: "8faf114c-a77c-4652-8ecd-5d495464b543",
        customer_id: "a3e35f0b-1db6-4811-9e59-7f20093e63aa",
        service_id: "122a675e-8b91-47c0-8460-08b617139226",
        status: "cancelled"
      })
    );
     dispatch(
     cancelRequest({ id: "6e03e02f-b0c8-44be-b5ac-d8b836bccaec", cancelreason: "wuehfesjhbsjbvjh" })
    );
     dispatch(retrieveRequests({ id: "8faf114c-a77c-4652-8ecd-5d495464b543" }));
    dispatch(respondToRequest({ id: "8faf114c-a77c-4652-8ecd-5d495464b543", providerstatus: "canclled" }));
  }, [dispatch]);

  return (
    <div>
      <h1>Booking Page</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>Available Services</h2>
        </div>
      )}
    </div>
  );
};

export default BookingPage;