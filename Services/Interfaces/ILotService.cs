using Services.DataTransferObjects.Lot.Requests;
using Services.DataTransferObjects.Lot.Responses;

namespace Services.Interfaces;

public interface ILotService
{
    Task<CreateLotResponse> CreateLot(CreateLotRequest request);
}
