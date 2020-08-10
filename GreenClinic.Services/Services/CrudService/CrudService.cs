using GreenClinic.Core.DomainObjects;
using GreenClinic.Core.Views;
using GreenClinic.Data.Repositories.GenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GreenClinic.Services.Services.CrudService
{
    public interface ICrudService<TEntity> where TEntity: Entity
    {
        IQueryable<TEntity> Store { get; }
        Task<TEntity> FindAsync(string id);
        Task<TEntity> UpsertAsync(TEntity entity);
        Task<TEntity> UpdateAsync(TEntity entity);
        Task<TEntity> DeleteAsync(TEntity entity);
        Task<TEntity> DeleteByIdAsync(string id);
       

    }
    public class CrudService<TEntity>: ICrudService<TEntity> where TEntity : Entity
    {

        private readonly IRepository<TEntity> _repository;
        protected CrudService(IRepository<TEntity> repository)
        {
            _repository = repository;
        }

        public IQueryable<TEntity> Store => _repository.GetStore();

        public virtual async Task<TEntity> DeleteAsync(TEntity entity)
        {
            return await _repository.DeleteAsync(entity);
        }

        public virtual async Task<TEntity> DeleteByIdAsync(string id)
        {
            return await _repository.DeleteAsync(id);
        }

        public virtual async Task<TEntity> FindAsync(string id)
        {
            return await _repository.FindAsync(id);
        }

        public virtual async Task<TEntity> UpdateAsync(TEntity entity)
        {
            return await _repository.UpdateAsync(entity);
        }

        public async Task<TEntity> UpsertAsync(TEntity entity)
        {
            return await _repository.UpsertAsync(entity);
        }
    }
}
