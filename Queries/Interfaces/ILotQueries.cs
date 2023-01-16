using Queries.DataTransferObjects.Lot.Responses;

namespace Queries.Interfaces;

public interface ILotQueries
{
    GetLotsResponse GetLots();

    GetLotResponse GetLot(Guid id);
}
