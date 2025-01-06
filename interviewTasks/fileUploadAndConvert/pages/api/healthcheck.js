export default function handler(req, res) {
  res.status(200).json({
    status_code: 1,
    status: 'success',
    data: {
      service: true,
    },
  });
}
//hardcoded response; if next APP is running this API route should be accessible; else the healthcheck api will fail
