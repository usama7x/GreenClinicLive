using Autofac;
using AutoMapper;
using GreenClinic.Data.DatabaseContext;
using GreenClinic.Services.System;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenClinic.System
{
    public class ClinicDependencyModule: Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterModule(new ServiceModule());
            builder.RegisterAssemblyTypes(ThisAssembly).Where(x => x.Name.EndsWith("Handler"))
            .AsImplementedInterfaces().AsSelf().InstancePerLifetimeScope();

            var config = new MapperConfiguration(cfg => {
                cfg.AddMaps(GetType().Assembly);
                cfg.AddMaps(typeof(ServiceModule).Assembly);
                cfg.AddMaps(typeof(ApplicationContext).Assembly);
            });
            
            //register your mapper
            //builder.Register<IMapper>(x => new Mapper(x.Resolve<IConfigurationProvider>(), x.Resolve)).As<IMapper>();
            builder.Register<IMapper>(x => new Mapper(config)).As<IMapper>();
            
        }
    }
}
