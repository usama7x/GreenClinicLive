using Autofac;
using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Data.System
{
    public class DataModule: Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(ThisAssembly).Where(x => x.Name.EndsWith("Repository"))
                .AsImplementedInterfaces().AsSelf().InstancePerLifetimeScope();
        }
    }
}
