import SkeletonN from "../../components/sceletons";

const CustomersSceleton =  () => {
  return (
    <div>
      <h2>Customers</h2>
      <SkeletonN count={3} />
    </div>
  );
};

export default CustomersSceleton;
