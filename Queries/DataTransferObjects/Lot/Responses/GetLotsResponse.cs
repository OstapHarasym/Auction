namespace Queries.DataTransferObjects.Lot.Responses;

public class GetLotsResponse
{
    public GetLotsResponseItem[] Lots { get; init; }

    public int TotalCount { get; init; }
}
