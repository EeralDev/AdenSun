using AdenSunAPI.DAL.DTO;
using AdenSunAPI.DAL.Entities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AdenSunAPI.Services
{
    public class CategoryTreeNode 
    {
        public CategoryDTO Category { get; set; }
        
        [JsonIgnore]
        public CategoryTreeNode Parent { get; set; }
        public List<CategoryTreeNode> Children { get; set; }
        public CategoryTreeNode() { }
        public CategoryTreeNode(CategoryDTO category, CategoryTreeNode parent, List<CategoryDTO> children)
        {
            Category = category;
            Parent = parent;
            Children = new List<CategoryTreeNode> { };
            if (children != null && children.Count != 0)
            {
                foreach (CategoryDTO child in children)
                {
                    this.AddChildren(child);
                }
            }
        }
        public int GetHeight()
        { 
            int height = 1;
            CategoryTreeNode current = this;
            while (current.Parent != null) 
            { 
                height++;
                current = current.Parent;
            }
            return height;
        }

        public void AddChildren(CategoryTreeNode child)
        {
            if (child != null)
            {
                Children.Add(child);
            }
        }

        public void AddChildren(CategoryDTO childData)
        {
            Children.Add(new CategoryTreeNode(childData, this, null));
        }
    }
    public class CategoryTree
    { 
        public CategoryTreeNode Root { get; set; }

        public CategoryTree() { }

        public CategoryTree(CategoryDTO root)
        {
            Root = new CategoryTreeNode(root, null, null);
        }   
    }
    public class CategoryService
    {
        private readonly AdenSunEntities _adenSunDBContext;
        public CategoryService(AdenSunEntities dbContext) 
        {
            _adenSunDBContext = dbContext;
        }
        public List<CategoryTree> GetCategories(int? maxHeight) 
        {
            using (_adenSunDBContext)
            {
                List<CategoryTree>  categories = _adenSunDBContext.ItemCategory_T
                    .Where(rootCategorie => rootCategorie.ParentID == null)
                    .AsEnumerable() //A retravailler : https://stackoverflow.com/questions/18929483/unable-to-create-a-constant-value-of-type-only-primitive-types-or-enumeration-ty    
                    .Select(categorie => new CategoryTree { Root = new CategoryTreeNode { Category = new CategoryDTO { CategoryID = categorie.CategoryID, Name = categorie.Name, ParentID = categorie.ParentID }, Parent=null, Children=new List<CategoryTreeNode>() } }).ToList();
                foreach (CategoryTree root in categories)
                {
                    this.PopulateTree(root.Root, 0, maxHeight);
                }
                return categories;
            }                
        }
        public List<CategoryTree> GetCategoriesByName(int CategoryID, int? maxHeight)
        {
            List<CategoryTree> categories = _adenSunDBContext.ItemCategory_T
                    .Where(rootCategorie => rootCategorie.CategoryID == CategoryID)
                    .AsEnumerable() //A retravailler : https://stackoverflow.com/questions/18929483/unable-to-create-a-constant-value-of-type-only-primitive-types-or-enumeration-ty    
                    .Select(categorie => new CategoryTree { Root = new CategoryTreeNode { Category = new CategoryDTO { CategoryID = categorie.CategoryID, Name = categorie.Name, ParentID = categorie.ParentID }, Parent = null, Children = new List<CategoryTreeNode>() } }).ToList();
            foreach (CategoryTree root in categories)
            {
                this.PopulateTree(root.Root, 0, maxHeight);
            }
            return categories;
        }
        private void PopulateTree(CategoryTreeNode node, int height, int? maxHeight)
        {
            using (AdenSunEntities CustomContext = new AdenSunEntities())
            {
                if (maxHeight == null || ( maxHeight != null && height < maxHeight))
                {
                    foreach (ItemCategory_T category in CustomContext.ItemCategory_T.Where(category => category.ParentID == node.Category.CategoryID).AsEnumerable())
                    {
                        CategoryTreeNode newNode = new CategoryTreeNode(new CategoryDTO { CategoryID = category.CategoryID, Name = category.Name, ParentID = category.ParentID }, node, null);
                        node.AddChildren(newNode);
                        if (category.ItemCategory_T1.Count != 0)
                        {
                            PopulateTree(newNode, height + 1, maxHeight);
                        }
                    }
                }               
            }
        }
    }
}