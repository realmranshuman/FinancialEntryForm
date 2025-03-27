import React, { useState } from 'react';
import styles from './FinancialEntryForm.module.css';

const App = () => {
  const [totalDebit, setTotalDebit] = useState('0');
  const [totalCredit, setTotalCredit] = useState('0');
  const [activeTab, setActiveTab] = useState('create');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerLeft}>
            {/* Placeholder Logo - Replace with your actual logo path */}
            <img src="/placeholder.svg" alt="Société Générale logo" className={styles.logo}  height="40" width="150"/>
            <span className={styles.homeLink}>Home</span>
          </div>
          <div className={styles.headerRight}>
            <span className={styles.sgMarkets}>SG | MARKETS</span>
            <button className={styles.signOutButton}>Sign out</button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.tabs}>
          <div className={styles.tabsList}>
            <button
              className={`${styles.tabTrigger} ${activeTab === 'create' ? styles.tabActive : ''}`}
              onClick={() => handleTabClick('create')}
            >
              Create Entry
            </button>
            <button
              className={`${styles.tabTrigger} ${activeTab === 'search' ? styles.tabActive : ''}`}
              onClick={() => handleTabClick('search')}
            >
              Search Entry
            </button>
          </div>

          {activeTab === 'create' && (
            <div className={styles.tabContent}>
              <div className={styles.formContainer}>
                <div className={styles.formHeader}>
                  <h1 className={styles.formTitle}>Creation Screen</h1>
                  <div className={styles.requiredFields}>Required fields are marked with *</div>
                </div>

                <form className={styles.form}>
                  {/* Row 1: D/C and Account */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="dc" className={styles.formLabel}>
                        D/C <span className={styles.required}>*</span>
                      </label>
                      <div className={styles.selectContainer}>
                        <select id="dc" className={styles.select}>
                          <option value="">D/C</option>
                          <option value="debit">Debit</option>
                          <option value="credit">Credit</option>
                        </select>
                        <div className={styles.selectIcon}>
                        {/* Placeholder Search Icon - Replace with your own icon */}
                          <span>🔍</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="account" className={styles.formLabel}>
                        Account <span className={styles.required}>*</span>
                      </label>
                      <input type="text" id="account" placeholder="Account" className={styles.input} />
                    </div>
                  </div>

                  {/* Row 2: Amount and Comment */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="amount" className={styles.formLabel}>
                        Amount <span className={styles.required}>*</span>
                      </label>
                      <input type="text" id="amount" placeholder="Amount" className={styles.input} />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="comment" className={styles.formLabel}>
                        Comment
                      </label>
                      <textarea id="comment" placeholder="Add comment" className={styles.textarea} />
                    </div>
                  </div>

                  {/* Row 3: Portfolio and Portfolio type */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="portfolio">Portfolio</label>
                      <input
                        type="text"
                        id="portfolio"
                        placeholder="Double click to edit"
                        readOnly
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="portfolioType">Portfolio type</label>
                      <input
                        type="text"
                        id="portfolioType"
                        placeholder="Portfolio type"
                        readOnly
                        className={styles.input}
                      />
                    </div>
                  </div>

                  {/* Row 4: COR/RC, Target branch, SGSA, Cancel SGSA */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroupQuarter}>
                      <label htmlFor="corrc">COR/RC</label>
                      <input type="text" id="corrc" placeholder="Double click to edit" readOnly className={styles.input} />
                    </div>
                    <div className={styles.formGroupQuarter}>
                      <label htmlFor="targetBranch" className={styles.formLabel}>
                        Target branch <span className={styles.required}>*</span>
                      </label>
                      <div className={styles.selectContainer}>
                        <select id="targetBranch" className={styles.select}>
                          <option value="">Target</option>
                          <option value="target1">Target 1</option>
                          <option value="target2">Target 2</option>
                        </select>
                        <div className={styles.selectIcon}>
                        {/* Placeholder Search Icon - Replace with your own icon */}
                          <span>🔍</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.formGroupQuarter}>
                      <label htmlFor="sgsa">SGSA counter</label>
                      <div className={styles.selectContainer}>
                        <select id="sgsa" className={styles.select}>
                          <option value="">SGSA</option>
                          <option value="sgsa1">SGSA 1</option>
                          <option value="sgsa2">SGSA 2</option>
                        </select>
                        <div className={styles.selectIcon}>
                        {/* Placeholder Search Icon - Replace with your own icon */}
                          <span>🔍</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.formGroupQuarter}>
                      <label htmlFor="cancelSGSA" className={styles.checkboxLabel}>
                        <input type="checkbox" id="cancelSGSA" className={styles.checkbox} />
                        Cancel SGSA
                      </label>
                    </div>
                  </div>

                  {/* Row 5: Bank code RIB, Branch code RIB, Account RIB, Key RIB */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroupQuarter}>
                      <label htmlFor="bankCodeRIB">Bank code RIB</label>
                      <input type="text" id="bankCodeRIB" placeholder="Bank code RIB" className={styles.input} />
                    </div>
                    <div className={styles.formGroupQuarter}>
                      <label htmlFor="branchCodeRIB">Branch code RIB</label>
                      <input type="text" id="branchCodeRIB" placeholder="Branch code RIB" className={styles.input} />
                    </div>
                    <div className={styles.formGroupQuarter}>
                      <label htmlFor="accountRIB">Account RIB</label>
                      <input type="text" id="accountRIB" placeholder="Account RIB" className={styles.input} />
                    </div>
                    <div className={styles.formGroupQuarter}>
                      <label htmlFor="keyRIB">Key RIB</label>
                      <input type="text" id="keyRIB" placeholder="Key RIB" className={styles.input} />
                    </div>
                  </div>

                  {/* Row 6: Beneficiary name, Project code, Product code, F/O identifier */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroupQuarter}>
                      <label htmlFor="beneficiaryName">Beneficiary name</label>
                      <input
                        type="text"
                        id="beneficiaryName"
                        placeholder="Beneficiary name"
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.formGroupQuarter}>
                      <label htmlFor="projectCode">Project code</label>
                      <input
                        type="text"
                        id="projectCode"
                        placeholder="Double click to edit"
                        readOnly
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.formGroupQuarter}>
                      <label htmlFor="productCode" className={styles.formLabel}>
                        Product code <span className={styles.required}>*</span>
                      </label>
                      <div className={styles.selectContainer}>
                        <select id="productCode" className={styles.select}>
                          <option value="">Product</option>
                          <option value="product1">Product 1</option>
                          <option value="product2">Product 2</option>
                        </select>
                        <div className={styles.selectIcon}>
                         {/* Placeholder Search Icon - Replace with your own icon */}
                          <span>🔍</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.formGroupQuarter}>
                      <label htmlFor="foIdentifier">F/O identifier long</label>
                      <input
                        type="text"
                        id="foIdentifier"
                        placeholder="F/O identifier long"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  {/* Row 7: CA RES */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroupQuarter}>
                      <label htmlFor="caRes">CA RES</label>
                      <div className={styles.selectContainer}>
                        <select id="caRes" className={styles.select}>
                          <option value="">CA RES</option>
                          <option value="ca1">CA RES 1</option>
                          <option value="ca2">CA RES 2</option>
                        </select>
                        <div className={styles.selectIcon}>
                        {/* Placeholder Search Icon - Replace with your own icon */}
                          <span>🔍</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Totals and Submit */}
                  <div className={styles.formTotals}>
                    <div className={styles.totals}>
                      <span className={styles.totalLabel}>Total debit:</span>
                      <span>{totalDebit}</span>
                      <span className={styles.totalLabel}>Total credit:</span>
                      <span>{totalCredit}</span>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'search' && (
            <div className={styles.tabContent}>
              <div className={styles.searchContent}>Search functionality would be implemented here</div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
