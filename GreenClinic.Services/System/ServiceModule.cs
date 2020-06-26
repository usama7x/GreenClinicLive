using Autofac;
using GreenClinic.Data.System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace GreenClinic.Services.System
{
    public class ServiceModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterModule(new DataModule());
            builder.RegisterAssemblyTypes(ThisAssembly).Where(x => x.Name.EndsWith("Service"))
                .AsImplementedInterfaces().AsSelf().InstancePerLifetimeScope();
            builder.RegisterType<UserManager<IdentityUser>>().AsSelf().AsImplementedInterfaces().InstancePerLifetimeScope();
            builder.RegisterType<UserStore<IdentityUser>>().AsSelf().AsImplementedInterfaces().InstancePerLifetimeScope();
            builder.RegisterType<RoleStore<IdentityRole>>().AsSelf().AsImplementedInterfaces().InstancePerLifetimeScope();
        }
    }
}
