using GreenClinic.Core.DomainObjects;
using GreenClinic.Data.DatabaseContext;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace GreenClinic.Data.Repositories.GenericRepository
{
    public interface IRepository<TEntity> where TEntity : Entity
    {
        public IQueryable<TEntity> GetStore();
        public Task<List<TEntity>> GetAll();
        public Task<List<TEntity>> GetAll(Expression<Func<TEntity, bool>> expression);
        public Task<TEntity> FindAsync(Expression<Func<TEntity, bool>> expression);
        public Task<TEntity> FindAsync(string id);
        public Task<TEntity> AddAsync(TEntity entity);
        public Task<TEntity> UpdateAsync(TEntity entity);
        public Task<TEntity> DeleteAsync(TEntity entity);
        public Task<TEntity> DeleteAsync(string id);
        public Task<TEntity> UpsertAsync(TEntity entity);
    }

    public class Repository<TEntity> : IRepository<TEntity> where TEntity : Entity, new()
    {
        public readonly ApplicationContext _context;

        public Repository(ApplicationContext context)
        {
            _context = context;          
        }

        public IQueryable<TEntity> GetStore()
        {
            return _context.Set<TEntity>();
        }

        public async Task<List<TEntity>> GetAll() => await _context.Set<TEntity>().ToListAsync();

        public async Task<List<TEntity>> GetAll(Expression<Func<TEntity, bool>> expression) 
            => await _context.Set<TEntity>().Where(expression).ToListAsync();

        public async Task<TEntity> FindAsync(Expression<Func<TEntity, bool>> expression)
            => await _context.Set<TEntity>().Where(expression).FirstOrDefaultAsync();

        public async Task<TEntity> FindAsync(string id) => await _context.Set<TEntity>().FindAsync(id);

        public async Task<TEntity> AddAsync(TEntity entity)
        {
            await _context.AddAsync(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task<TEntity> UpdateAsync(TEntity entity)
        {
            _context.Set<TEntity>().Update(entity);
            _context.Entry<TEntity>(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task<TEntity> DeleteAsync(TEntity entity)
        {
            _context.Set<TEntity>().Remove(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task<TEntity> DeleteAsync(string id)
        {
            var entity = new TEntity() { Id = id };
            _context.Set<TEntity>().Attach(entity);
            _context.Set<TEntity>().Remove(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task<TEntity> UpsertAsync(TEntity entity)
        {
            var exist = _context.Set<TEntity>().Any(x => x.Id == entity.Id);
            return exist ? await UpdateAsync(entity) : await AddAsync(entity); 
        }

    }
}
