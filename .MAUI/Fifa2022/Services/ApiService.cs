namespace Fifa2022.Services
{
    public class ApiService : RestServiceBase, IApiService
    {
        protected ApiService(IConnectivity connectivity) : base(connectivity)
        {
            SetBaseURL(Constants.apiEndpoint);
        }
    }
}
