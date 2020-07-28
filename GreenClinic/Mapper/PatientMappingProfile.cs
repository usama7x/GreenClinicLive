using GreenClinic.Core.DomainObjects;
using GreenClinic.ViewModels;
using Profile = AutoMapper.Profile;

namespace GreenClinic.Mapper
{
    public class PatientMappingProfile : Profile
    {
        public PatientMappingProfile()
        {
            CreateMap<PatientViewModel, Patient>()
                .ForMember(x => x.Id, x => x.Ignore())
                .ForMember(x => x.Stamp, x => x.Ignore())
                .ReverseMap()
                .ForMember(x => x.Id, x => x.Condition(y => !string.IsNullOrEmpty(y.Id)));
               
        }
    }
}
