using GreenClinic.Core.DomainObjects;
using GreenClinic.Core.Views;
using GreenClinic.Data.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace GreenClinic.Services.Services.CrudService
{
    public interface ICrudService<TEntity> where TEntity: Entity
    {
       
    }
    public class CrudService<TEntity>: ICrudService<TEntity> where TEntity : Entity
    {

        private readonly IRepository<TEntity> _repository;
        protected CrudService(IRepository<TEntity> repository)
        {
            _repository = repository;
        }

        public IQueryable<TEntity> Store => _repository.GetStore();
    }
}
