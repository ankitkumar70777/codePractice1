const DashboardLayout = ({
  children,
  notifications,
  revenueMatrues,
  userAnalytics,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenueMatrues: React.ReactNode;
  userAnalytics: React.ReactNode;
}) => {
  return (
    <div className='p-4'>
      <div className='mb-4'>Header</div>
      {children}
      <div className="flex justify-center align-center">
        <div>
          <div>{userAnalytics}</div>
          <div>{revenueMatrues}</div>
        </div>
        <div>{notifications}</div>
      </div>
      <div className='mt-4'>Footer</div>
    </div>
  );
};

export default DashboardLayout;
