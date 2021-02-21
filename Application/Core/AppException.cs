namespace Application.Core
{
    public class AppException
    {
        public AppException(int statusCode, string message, string stackTraceDetails = null)
        {
            StatusCode = statusCode;
            Message = message;
            StackTraceDetails = stackTraceDetails;
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }
        public string StackTraceDetails { get; set; }
    }
}