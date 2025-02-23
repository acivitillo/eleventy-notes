---
title: Introducing Metadata
tags: ["data-governance"]
sort: 1
---

Metadata is **data about data**, and because of that, it plays a critical role in **automating pipelines, improving observability, and enabling governance**. Metadata is not only **system-generated**; some of it is actively **managed by developers, data engineers, and governance teams** to enhance data discoverability and compliance.

---

## **It’s All About Assets**

Before diving into metadata itself, we need to define **what an asset is** in the context of **data pipelines and governance**. This is because **one of the key objectives of metadata management is describing and managing assets effectively**.

### **What Is an Asset?**

A **data asset** is any **structured or unstructured data resource** that provides **value** within a data ecosystem. Examples of data assets include:

- **SQL Tables** – Relational datasets stored in databases.
- **Dashboards** – Visual reports used for business intelligence.
- **Jupyter Notebooks** – Interactive data science workflows.
- **Excel Files** – Spreadsheet-based data storage and analysis.

### **Data Asset vs. Data Product**

A **data product** is a **higher-level concept** that represents **a curated, governed, and reusable dataset** intended for consumption by business users, data scientists, or applications.

- A **data asset** can be raw and internal to a pipeline (e.g., a staging table).
- A **data product** is typically **refined, documented, and treated as a first-class deliverable** (e.g., a customer 360° dataset or a sales forecasting model).

Metadata applies to **both assets and products**, but governance frameworks like **Data Mesh** emphasize treating data as a **product**, ensuring it is **discoverable, high-quality, and self-servable**.

---

## **Static and Dynamic Metadata**

Metadata can be categorized into two main types:

### **1. Static Metadata** (Defined Before Execution)

Static metadata is **predefined and does not change** during pipeline execution. It includes essential governance information such as:

- **Who owns this data asset?**
- **How is this asset created?** (**Lineage**)
- **Who can access this data asset?**
- **Who is responsible for support and maintenance?**

Static metadata is often **embedded within the codebase** or **defined in configuration files**. For example, **data lineage** can be derived by **tracking SQL dependencies**—following each **CTE (Common Table Expression)** and **nested query step** to reconstruct the **entire transformation path**.

### **2. Dynamic Metadata** (Generated at Runtime)

Dynamic metadata is **collected at runtime** and provides **real-time insights into data quality, usage, and performance**. It answers questions such as:

- **Is this data asset reliable?**
- **Did any data quality checks fail during the last pipeline run?**
- **How frequently is this asset accessed?**
- **Who is using this data, and how?**

Unlike static metadata, **dynamic metadata requires active monitoring and tracking**. This is where **orchestration tools like Prefect and Airflow** play a  role. These tools can **send dynamic metadata to data catalogs as they execute pipelines**, making dynamic metadata capture and integration **seamless**.

Both **static and dynamic metadata** are essential for **governing modern data pipelines**, ensuring **trust, compliance, and discoverability**.

---

## **Metadata Management: Best Practices**

Metadata management should start **early in the pipeline development process**—as soon as analysts move their **first version of a pipeline into production**.

### **How Analysts & Engineers Should Manage Metadata**

✔ **Ensure SQL is structured for clear lineage tracking** – Queries should be **modular and well-documented** to allow automated parsing of transformations.

✔ **Version-control SQL and pipeline definitions** – Metadata should be **stored and updated centrally** in a code repository, ensuring **auditability and traceability**.

✔ **Explicitly define static metadata** – Information such as **data domains, owners, and access policies** should be embedded into the pipeline code or metadata repositories.

✔ **Involve business stakeholders** – Metadata should not just be a technical effort—**product owners, business analysts, and governance teams** should contribute to defining **data ownership, business meaning, and access policies**.

---

## **Managing Metadata with Pull Requests**

Since this is a **code-first guide**, our preferred **best practice** is to **manage metadata through version control**, particularly using **pull requests**.

**Each** **metadata update can be reviewed, rejected, or approved through a structured pull request (PR) process**. This provides several advantages:

### **5 Key Advantages of Using Pull Requests for Metadata Management**

1️⃣ **Version Control & Auditability**\
Every change to metadata is **recorded in Git**, allowing teams to **track modifications over time**, revert changes, and ensure compliance.

2️⃣ **Automation & Validation**\
Pull requests allow for **automated metadata validation** using **CI/CD pipelines**. For example:

- Formatting checks (e.g., enforcing schema consistency).
- Validation checks (e.g., ensuring required fields like `owner` or `data sensitivity` are filled).
- Linting tools to **enforce naming conventions**.

3️⃣ **Collaboration & Review Process**\
Changes to metadata undergo **peer review**, ensuring that new assets have proper **documentation, ownership assignments, and governance policies** before deployment.

4️⃣ **Security & Access Control**\
By enforcing **Git-based metadata updates**, organizations can limit **who can modify key governance rules**, preventing unauthorized access or misconfigurations.

5️⃣ **Continuous Improvement**\
Pull requests enable **iterative metadata improvements**, making it easy to refine definitions, add new attributes, and incorporate feedback over time.

By **treating metadata as code**, organizations ensure **scalability, consistency, and governance enforcement** within their pipelines.

---

## **Data Catalogs: The Metadata Discovery Layer**

A **data catalog** is a **centralized platform** that aggregates, stores, and manages metadata, enabling **data discovery, governance, and collaboration**.

### **How Data Catalogs Enhance Metadata Management**

📌 **Improve Discoverability** – Users can **search for data assets** using **tags, descriptions, and metadata attributes** instead of manually querying databases.

📌 **Enable Data Lineage Tracking** – Catalogs integrate with orchestration tools to **visualize how data moves and transforms across pipelines**.

📌 **Support Compliance & Security** – Catalogs help **classify sensitive data**, ensuring compliance with **GDPR, HIPAA, and industry regulations**.

📌 **Provide Usage Insights** – Many catalogs track **who accessed what data**, helping organizations understand **which assets are valuable and which are unused**.

By implementing **code-first metadata management**, using **Git for version control**, and leveraging **data catalogs**, organizations can **ensure data quality, improve discovery, and enforce governance at scale**.
